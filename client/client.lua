local ESX = exports["es_extended"]:getSharedObject()

local function OpenNui(arg)
  SetNuiFocus(arg, arg)
  SendNUIMessage({
    action = 'setVisible',
    data = arg
  })
end

RegisterCommand('open-ui', function()
  OpenNui(true)
end)

RegisterNUICallback('hide-ui', function(_, cb)
  OpenNui(false)
  cb({})
end)

RegisterNUICallback('getPlayerMoney', function(data, cb)
  local money = ESX.PlayerData.money
  cb(money)
end)


RegisterNUICallback('getConfig', function(_, cb)
  cb({
    primaryColor = Config.PrimaryColor,
    primaryShade = Config.PrimaryShade
  })
end)
