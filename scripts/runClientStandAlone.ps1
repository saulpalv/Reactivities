Write-Host "Starting API Service in " -nonewline; Write-Host $Env:COMPUTERNAME -f Yellow
Set-Location ..
Set-Location client-app
$path = Get-Location
write-host "Project path se to  : " -nonewline; Write-Host $path -f Yellow
write-host "Starting npm start =>  : " -f Yellow
write-host "-----------------------------"
write-host `n

npm start