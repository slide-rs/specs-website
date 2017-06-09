mkdir ../ghp &&
cp -r public/* ../ghp/ &&
git checkout --orphan gh-pages &&
rm -rf * &&
cp -r ../ghp/* ./ &&
git add -A &&
git commit --quiet -m "Update page"

