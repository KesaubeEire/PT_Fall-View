@echo off
REM 执行 'npx vite build --minify false' 命令
call npx vite build --minify false

REM 将 dist 的文件移动到 build 文件夹下并重命名
move /Y dist\pt-fall-view.user.js build\[full]pt-fall-view.js

REM 执行 'npx vite build --minify' 命令
call npx vite build --minify

REM 将 dist 的文件移动到 build 文件夹下并重命名
move /Y dist\pt-fall-view.user.js build\[minify]pt-fall-viewte.js

echo ======^> Build completed.
pause
