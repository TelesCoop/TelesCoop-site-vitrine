set -eux
npx @11ty/eleventy --input=. --output=_site
scp -r _site/* root@51.91.100.8:/root/telescoop/
