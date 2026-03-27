/**
 * MteamCard 组件鲁棒性测试
 *
 * 这个脚本测试卡片组件对各种异常数据的处理能力
 * 运行：node test/test-robustness.js
 */

// 模拟 safeTorrentInfo 逻辑（从 MteamCard.svelte 提取）
function createSafeTorrentInfo(torrentInfo) {
  // 如果 torrentInfo 无效，返回安全的默认对象
  if (!torrentInfo || typeof torrentInfo !== 'object') {
    console.warn('Mteam_Card: torrentInfo 数据格式错误', torrentInfo);
    return {
      id: 'error',
      name: '数据错误',
      category: '0',
      imageList: [],
      labelsNew: [],
      size: 0,
      status: {
        toppingLevel: '0',
        discount: 'NORMAL',
        discountEndTime: null,
        comments: '0',
        seeders: '0',
        leechers: '0',
        timesCompleted: '0'
      },
      smallDescr: '',
      labels: '0',
      createdDate: '',
      index: 0
    };
  }

  // 创建安全的 torrentInfo，确保关键属性存在
  return {
    ...torrentInfo,
    id: torrentInfo.id || 'unknown',
    name: torrentInfo.name || '未知种子',
    category: torrentInfo.category || '0',
    imageList: Array.isArray(torrentInfo.imageList) ? torrentInfo.imageList : [],
    labelsNew: Array.isArray(torrentInfo.labelsNew) ? torrentInfo.labelsNew : [],
    size: typeof torrentInfo.size === 'number' ? torrentInfo.size :
          typeof torrentInfo.size === 'string' ? Number(torrentInfo.size) || 0 : 0,
    status: {
      toppingLevel: torrentInfo.status?.toppingLevel || '0',
      discount: torrentInfo.status?.discount || 'NORMAL',
      discountEndTime: torrentInfo.status?.discountEndTime || null,
      comments: torrentInfo.status?.comments || '0',
      seeders: torrentInfo.status?.seeders || '0',
      leechers: torrentInfo.status?.leechers || '0',
      timesCompleted: torrentInfo.status?.timesCompleted || '0',
      ...torrentInfo.status
    },
    smallDescr: torrentInfo.smallDescr || '',
    labels: torrentInfo.labels || '0',
    createdDate: torrentInfo.createdDate || '',
    index: typeof torrentInfo.index === 'number' ? torrentInfo.index : 0
  };
}

// 测试用例
const testCases = [
  {
    name: '1. 完全无效数据 - null',
    input: null,
    expected: { id: 'error', name: '数据错误' }
  },
  {
    name: '2. 完全无效数据 - undefined',
    input: undefined,
    expected: { id: 'error', name: '数据错误' }
  },
  {
    name: '3. 完全无效数据 - 空对象',
    input: {},
    expected: { id: 'unknown', name: '未知种子' }
  },
  {
    name: '4. 缺少关键字段 - 没有 status',
    input: { id: '123', name: '测试种子' },
    expected: {
      id: '123',
      name: '测试种子',
      status: {
        toppingLevel: '0',
        discount: 'NORMAL',
        comments: '0',
        seeders: '0',
        leechers: '0',
        timesCompleted: '0'
      }
    }
  },
  {
    name: '5. 部分数据缺失 - status 有空字段',
    input: {
      id: '456',
      status: {},
      imageList: null,
      labelsNew: '不是数组'
    },
    expected: {
      id: '456',
      status: {
        toppingLevel: '0',
        discount: 'NORMAL',
        comments: '0',
        seeders: '0',
        leechers: '0',
        timesCompleted: '0'
      },
      imageList: [],
      labelsNew: []
    }
  },
  {
    name: '6. 类型错误 - 数字字符串转换',
    input: {
      id: 789,
      size: 'not-a-number',
      labels: 7 // 位运算测试
    },
    expected: {
      id: 789,
      size: 0, // 转换失败应为0
      labels: 7
    }
  },
  {
    name: '7. 正常数据 - 验证默认值不覆盖',
    input: {
      id: '999',
      name: '正常种子',
      category: '402',
      imageList: ['https://example.com/image.jpg'],
      size: 1024,
      status: {
        toppingLevel: '2',
        discount: 'FREE',
        discountEndTime: '2025-01-30 12:06:23',
        comments: '10',
        seeders: '100',
        leechers: '5',
        timesCompleted: '500'
      },
      smallDescr: '测试描述',
      labels: '3', // 二进制: 1+2
      createdDate: '2025-01-30 00:06:23',
      index: 1
    },
    expected: {
      id: '999',
      name: '正常种子',
      category: '402',
      imageList: ['https://example.com/image.jpg'],
      size: 1024,
      status: {
        toppingLevel: '2',
        discount: 'FREE',
        discountEndTime: '2025-01-30 12:06:23',
        comments: '10',
        seeders: '100',
        leechers: '5',
        timesCompleted: '500'
      },
      smallDescr: '测试描述',
      labels: '3',
      createdDate: '2025-01-30 00:06:23',
      index: 1
    }
  }
];

// 辅助函数：深度比较对象（简化版）
function deepEqual(obj1, obj2, path = '') {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 === 'object' && obj1 !== null && obj2 !== null) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // 只检查 obj1 中的键（允许 obj2 有额外键）
    for (const key of keys1) {
      const currentPath = path ? `${path}.${key}` : key;
      if (!deepEqual(obj1[key], obj2[key], currentPath)) {
        return false;
      }
    }
    return true;
  }
  return obj1 === obj2;
}

// 运行测试
console.log('🚀 开始测试 MteamCard 组件鲁棒性\n');

let passed = 0;
let failed = 0;

testCases.forEach((testCase, index) => {
  console.log(`📋 ${testCase.name}`);
  const inputStr = testCase.input === undefined ? 'undefined' : JSON.stringify(testCase.input);
  console.log(`   输入: ${inputStr.slice(0, 100)}...`);

  try {
    const result = createSafeTorrentInfo(testCase.input);

    // 检查关键属性是否存在
    const hasRequiredProps = result.id && result.name && result.status;

    // 深度比较预期结果
    const isMatch = deepEqual(testCase.expected, result);

    if (hasRequiredProps && isMatch) {
      console.log(`   ✅ 通过 - 生成安全对象`);
      passed++;
    } else {
      console.log(`   ❌ 失败 - 结果不符预期`);
      console.log(`      预期: ${JSON.stringify(testCase.expected).slice(0, 100)}...`);
      console.log(`      实际: ${JSON.stringify(result).slice(0, 100)}...`);
      failed++;
    }
  } catch (error) {
    console.log(`   💥 崩溃 - 抛出异常: ${error.message}`);
    failed++;
  }

  console.log('');
});

console.log(`📊 测试结果: ${passed} 通过, ${failed} 失败`);

if (failed === 0) {
  console.log('🎉 所有测试通过！组件鲁棒性良好。');
} else {
  console.log('⚠️  存在失败测试，需要进一步检查。');
}

// 额外测试：模拟组件渲染中的常见错误场景
console.log('\n🔬 额外测试：模拟实际渲染场景\n');

const errorScenarios = [
  {
    name: 'A. 直接访问原始数据的危险属性',
    test: () => {
      const data = null;
      // 原始代码可能会这样访问：data.status.discount
      try {
        const discount = data.status.discount;
        return false;
      } catch (e) {
        return true; // 应该抛出异常
      }
    },
    expected: true
  },
  {
    name: 'B. 使用安全数据的属性访问',
    test: () => {
      const data = null;
      const safe = createSafeTorrentInfo(data);
      // 安全访问
      const discount = safe.status.discount;
      return discount === 'NORMAL'; // 应该返回默认值
    },
    expected: true
  },
  {
    name: 'C. 图片数组为空的情况',
    test: () => {
      const data = { imageList: null };
      const safe = createSafeTorrentInfo(data);
      return Array.isArray(safe.imageList) && safe.imageList.length === 0;
    },
    expected: true
  },
  {
    name: 'D. 标签数组类型错误',
    test: () => {
      const data = { labelsNew: 'tag1,tag2' };
      const safe = createSafeTorrentInfo(data);
      return Array.isArray(safe.labelsNew) && safe.labelsNew.length === 0;
    },
    expected: true
  }
];

errorScenarios.forEach(scenario => {
  console.log(`📋 ${scenario.name}`);
  try {
    const result = scenario.test();
    if (result === scenario.expected) {
      console.log(`   ✅ 通过`);
    } else {
      console.log(`   ❌ 失败 - 预期 ${scenario.expected}, 实际 ${result}`);
    }
  } catch (error) {
    console.log(`   💥 崩溃 - ${error.message}`);
  }
});

console.log('\n💡 测试建议：');
console.log('1. 在浏览器中实际测试：运行 npm run dev，在控制台手动测试');
console.log('2. 模拟网络错误：使用无效图片URL，测试图片加载失败处理');
console.log('3. 测试瀑布流：单个卡片出错时，其他卡片应正常渲染');
console.log('4. 测试数据更新：动态更新 torrentInfo，观察组件响应');