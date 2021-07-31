.PHONY: build
install:
	bundle install

serve:
	bundle exec jekyll serve --host=0.0.0.0

build:
	bundle exec jekyll build

build-dotcom:
	rm -rf ./dist
	bundle exec jekyll build --config _config.yml,build/_dotcom.yml --destination dist
	