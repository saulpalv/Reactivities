Set-Location ..
Write-Host 'Droping API database it will be autorecreated and seeded on API run'
dotnet ef database drop -p Persistence/ -s API/

Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');