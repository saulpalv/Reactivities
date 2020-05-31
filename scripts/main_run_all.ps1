Write-Host "Starting Services in" $Env:COMPUTERNAME
$currentPath = Get-Location
$parentPath = Split-Path -Path $currentPath -Parent
write-host "Scripts path : $currentPath"
write-host "Project path : $parentPath" 

$scriptSvrPath = "$currentPath\runAPI.ps1"
$scriptCltPath = "$currentPath\runClient.ps1"

Write-Host `n

write-host "running server" $scriptSvrPath
# THIS WORKS ON MANUAL CONSOLE INPUT
# Start-Process pwsh -ArgumentList  "-NoExit", "-WorkingDirectory C:\Users\saula\RiderProjects\Reactivities\", "-File C:\Users\saula\RiderProjects\Reactivities\scripts\runAPI.ps1"
$argListSvr = "-NoExit", "-NoProfile", "-WorkingDirectory $($parentPath)", "-File $($scriptSvrPath)"
Start-Process pwsh -ArgumentList $argListSvr

write-host "running client" $scriptCltPath
$argListClt = "-NoExit", "-NoProfile", "-WorkingDirectory $($parentPath)", "-File $($scriptCltPath)"
Start-Process pwsh -ArgumentList $argListClt

Write-Host `n

Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');
Write-Host `n



