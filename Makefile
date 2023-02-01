serve:=bundle exec jekyll serve --host=0.0.0.0
.PHONY: build
install:
	bundle install

serve:
	$(serve)

serve-drafts:
	$(serve) --drafts

post:
	@sh create-post.sh $(if $(date),--date $(date))

build:
	bundle exec jekyll build

build-dotcom:
	rm -rf ./dist
	bundle exec jekyll build --config _config.yml,build/_dotcom.yml --destination dist
