$images = @{
    "hero-poster.jpg" = "https://images.pexels.com/photos/5846247/pexels-photo-5846247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "about-team.jpg" = "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "welding-1.jpg" = "https://images.pexels.com/photos/37554327/pexels-photo-37554327/free-photo-of-industrial-welder-working-in-a-factory-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "welding-2.jpg" = "https://images.pexels.com/photos/17406672/pexels-photo-17406672/free-photo-of-welder-at-work.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "welding-3.jpg" = "https://images.pexels.com/photos/15016529/pexels-photo-15016529/free-photo-of-standing-man-welding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "welding-4.jpg" = "https://images.pexels.com/photos/22863134/pexels-photo-22863134/free-photo-of-a-person-wearing-protective-clothing-welding-in-a-workshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "welding-5.jpg" = "https://images.pexels.com/photos/33653239/pexels-photo-33653239/free-photo-of-man-welding-outdoors-in-daylight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    "service-erection.jpg" = "https://images.pexels.com/photos/28852845/pexels-photo-28852845/free-photo-of-welder-working-in-metal-workshop-with-arc-welding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "service-maintenance.jpg" = "https://images.pexels.com/photos/29386092/pexels-photo-29386092/free-photo-of-professional-welding-with-sparking-metalwork.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "service-energy.jpg" = "https://images.pexels.com/photos/35635223/pexels-photo-35635223/free-photo-of-industrial-welder-in-action-with-sparks-flying.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    "industry-pharma.jpg" = "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "industry-chemical.jpg" = "https://images.pexels.com/photos/236370/pexels-photo-236370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "industry-petrochem.jpg" = "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "industry-power.jpg" = "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "industry-cement.jpg" = "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    "industry-powerplant.jpg" = "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

$destDir = "f:\Shiv Krishna Engineers\public\images"
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

foreach ($key in $images.Keys) {
    $url = $images[$key]
    $destFile = Join-Path -Path $destDir -ChildPath $key
    Write-Host "Downloading $key..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $destFile -ErrorAction Stop
        Write-Host "Success: $key"
    } catch {
        Write-Host "Failed to download $key : $_"
    }
}
