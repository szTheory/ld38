"use strict"

LD38.PlayScreen = me.ScreenObject.extend({
	init: function() {
		this._super(me.ScreenObject, 'init', arguments);
		this.nextSong = window.game.options.song || 'level1';
	},

	add: function(item, container) {
		container = container || me.game.world
		container.addChild(item);
		this.entities.push(item);
		return item;
	},

	onResetEvent: function() {
		me.audio.stopTrack();
		this.entities = [];
		this.bg = this.add(new LD38.BGManager());
		this.song = this.add(LD38.Song[this.nextSong]());
		this.nextSong = this.song.next;

		this.kaiju = this.add(me.pool.pull('Kaiju', this.song));

		this.add(me.pool.pull('Man', 130, 125));

		me.game.viewport.follow(this.kaiju, me.game.viewport.AXIS.HORIZONTAL);
		me.game.viewport.setDeadzone(0, 0);
	},

	onDestroyEvent: function() {
		this.entities.forEach((item) => {
			item.ancestor.removeChild(item);
		});
		this.entries = [];
		me.audio.stopTrack();
	},
});
