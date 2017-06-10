# Builds the site
# Assumes that working directory is the repository

# Cleanup
rm -Rf build
rm -Rf public

# Build website
./scripts/hugo

mkdir -p public/docs/docs/master/
mkdir -p public/docs/book/master/

# Build docs
mkdir build
cd build

git clone https://github.com/slide-rs/specs
cd specs

## For master and every important release
git checkout master
cargo doc

cp -r target/doc/* ../../public/docs/docs/master/

cd book
mdbook build

cp -r book/* ../../../public/docs/book/master/

cd ../../../

