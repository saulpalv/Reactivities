# Set-PSDebug -Trace 2;
Write-Host "Starting API Service in " -nonewline; Write-Host $Env:COMPUTERNAME -f Yellow
Set-Location API
$path = Get-Location
write-host "Project path se to  : " -nonewline; Write-Host $path -f Yellow
write-host "Starting watch run =>  : " -f Yellow
write-host "-----------------------------"
write-host `n

dotnet watch run

Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');