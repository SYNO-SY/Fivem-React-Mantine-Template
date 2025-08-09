local NotificationTitle = "SY_ReactTemplate"

if not GetResourceState('ox_lib'):find('start') then
    print('ox_lib should be started before this resource')
    print(lib.context)
    if not lib or not cache then return end
end

-- Load locale
RegisterNUICallback('loadLocale', function(_, cb)
    cb(1)
    local locale = Config.language or 'en'
    local JSON = LoadResourceFile(cache.resource, ('locales/%s.json'):format(locale))
    if not JSON then
        JSON = LoadResourceFile(cache.resource, 'locales/en.json')
        lib.notify({
            type = 'error',
            title = NotificationTitle,
            description = "'" .. locale .. "' locale not found",
            duration = 10000
        })
    end
    SendNUIMessage({
        action = 'setLocale',
        data = json.decode(JSON)
    })
end)
