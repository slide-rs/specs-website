# Builds the site
# Assumes that working directory is the repository

# Cleanup
rm -Rf build
rm -Rf public

# Build website
./scripts/hugo

mkdir -p public/docs/docs/master/
mkdir -p public/docs/book/master/

mkdir -p public/docs/docs/0.9/
mkdir -p public/docs/book/0.9/

mkdir -p public/docs/docs/0.10/
mkdir -p public/docs/book/0.10/

# Build docs
mkdir build
cd build

git clone https://github.com/slide-rs/specs
cd specs

## For master and every important release
### master
echo "Starting build for master"
pwd

git checkout master
cargo doc

cp -r target/doc/* ../../public/docs/docs/master/

cd book
mdbook build

cp -r book/* ../../../public/docs/book/master/

cd ..
### 0.9
echo "Starting build for 0.9"
pwd

git checkout -b release-0.9 origin/release-0.9
cargo doc

cp -r target/doc/* ../../public/docs/docs/0.9/

cd book
mdbook build

cp -r book/* ../../../public/docs/book/0.9/
cd ..
### 0.10
echo "Starting build for 0.10"
pwd

git checkout -b release-0.10 origin/release-0.10
cargo doc

cp -r target/doc/* ../../public/docs/docs/0.10/

cd book
mdbook build

cp -r book/* ../../../public/docs/book/0.10/
cd ..
### end

cd ../../

