.PHONY: build
install:
	bundle install

update:
	bundle update --bundler

serve:
	bundle exec jekyll serve

build:
	bundle exec jekyll build

build-dotcom:
	rm -rf ./dist
	bundle exec jekyll build --config _config.yml,build/_dotcom.yml --destination dist
