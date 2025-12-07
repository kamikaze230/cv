# Script pour créer le dossier images et déplacer les images
if (-not (Test-Path "images")) {
    New-Item -ItemType Directory -Path "images"
    Write-Host "Dossier 'images' créé"
}

if (Test-Path "KamiBot.png") {
    Copy-Item "KamiBot.png" "images\KamiBot.png" -Force
    Write-Host "KamiBot.png copié dans images/"
}

if (Test-Path "Sirtet.png") {
    Copy-Item "Sirtet.png" "images\Sirtet.png" -Force
    Write-Host "Sirtet.png copié dans images/"
}

Write-Host "Configuration des images terminée!"

