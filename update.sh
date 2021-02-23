basepath=$(cd `dirname $0`; pwd)
cd $basepath
git pull origin master
git status && git add . && git commit -m "commit something" && git push origin master
echo
echo 更新完成:$basepath
echo 按任意键继续...
read -n 1