-- Pull in the wezterm API
local wezterm = require 'wezterm'
local mux = wezterm.mux

-- This table will hold the configuration.
local config = {}

-- In newer versions of wezterm, use the config_builder which will
-- help provide clearer error messages
if wezterm.config_builder then config = wezterm.config_builder() end

wezterm.on('gui-startup', function(cmd)
    local tab, pane, window = mux.spawn_window(cmd or {})
    window:gui_window():maximize()
end)

-- This is where you actually apply your config choices

-- For example, changing the color scheme:
config.color_scheme = 'Catppuccin Mocha'

-- Font
config.font = wezterm.font('JetBrainsMono Nerd Font Mono', {weight = 'Bold'})

-- Transparency
config.window_background_opacity = 0.85
config.text_background_opacity = 1.0

-- Fix for reloading symlinked config
wezterm.add_to_config_reload_watch_list(wezterm.config_dir)

-- and finally, return the configuration to wezterm
return config
