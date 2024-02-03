if [[ `git status --porcelain` ]]; then
  # Changes
  echo "WARNING: changes currently exist, please commit these before updating from local"
  exit
else
  # No changes
  git fetch origin
  reslog=$(git log HEAD..origin/master --oneline)
  if [[ "${reslog}" != "" ]] ; then
    # Not up to date
    echo "WARNING: local is not up to date with remote, please pull before updating from local"
    exit
  else
    # Up to date
    # Manually update wezterm config
    echo "Updating wezterm configs"
    mv "$HOME/.config/wezterm" .config/
    
    echo "Manually managed configs updated"
  fi
fi
