deploy:
	rm -rf _site/*
	npx @11ty/eleventy
	scp -r _site/* telescoop_website:/root/telescoop/

serve:
	npx @11ty/eleventy --serve
