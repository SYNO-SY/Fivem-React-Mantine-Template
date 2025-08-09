fx_version "cerulean"
games {
  "gta5",
  "rdr3"
}

description "React + Mantine Boilerplate"
author "SYNO"
version '1.0.0'

lua54 'yes'

ui_page 'web/build/index.html'

shared_scripts {
  '@ox_lib/init.lua', "shared/**/*"
}
client_script "client/**/*"
server_script "server/**/*"

files {
  'locales/*.json',
  'web/build/index.html',
  'web/build/**/*',
}
