#!/bin/bash

# 执行 'npx vite build --minify false' 命令
npx vite build --minify false

# 将 dist 的文件移动到 build 文件夹下并重命名为 '[full]masonrySvelte.js'
mv dist/pt-fall-view.user.js build/[full]pt-fall-view.js

# 执行 'npx vite build --minify' 命令
npx vite build --minify

# 将 dist 的文件移动到 build 文件夹下并重命名为 '[minify]masonrySvelte.js'
mv dist/pt-fall-view.user.js build/[minify]pt-fall-viewte.js

echo "======> Build completed."
