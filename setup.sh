check_existing () {
	if [ -d "$HOME/$1" ]; then
		echo "$1 exists, moving to bak/"
		if [ -d "bak/$1" ]; then
			rm -rf "bak/$1"
		fi
		mkdir -p "bak/$1"; mv -f "$HOME/$1" "$_"
	fi
}

for file in .config/* ;do
	# check for existing configs
    [ -d "$file" ] && check_existing "$file"

	# call stow
	stow .

	# # manually copy wezterm configs
	# mkdir -p "$HOME/.config/wezterm"; cp .config/wezterm/wezterm.lua "$_"
done
