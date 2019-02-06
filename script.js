(function(){

	var LittleFoot = {
	  initialize: function(){
		self = this

		if (document.readyState == 'interactive') {
		  self.setup()
		} else {
		  document.addEventListener("DOMContentLoaded", function(event) {
			self.setup()
		  })
		}

	  },

	  setup: function (anchor) {
		var anchors = document.querySelectorAll("sup[id^=fnref] a")

		if (anchors.length > 0) {

		  Array.prototype.forEach.call(anchors, function(anchor){
			self.addFootnote(anchor)
		  })

		  document.addEventListener("click", self.click.bind(self))
		  document.querySelector('div.footnotes').remove()
		}
	  },

	  addFootnote: function(anchor) {
		// We want to add the footnote adjacent to the footnote <sup> element
		var sup = getParent(anchor, 'sup')
		sup.insertAdjacentHTML('afterend', this.template.wrapper(anchor));

		sup.nextElementSibling.footnoteContent = this.template.footnoteContent(anchor)
		sup.remove()
	  },

	  click: function (event) {
		self = this

		// Did a footnote button trigger the click event?
		var button = getParent(event.target, '.littlefoot-button')

		// Close if the click was outisde of the open footnote
		if (!getParent(event.target, '.littlefoot-container.is-open')) {
		  self.close()
		}

		// Toggle if the click was inside the button
		if (button) { self.toggle(button) }

	  },

	  // Watch the resize event to continually position the footnote popover
	  resize: function () {
		self = this

		// Only reposition this every 50 miliseconds to avoid constant repainting
		window.clearTimeout(self.timeout)
		self.timeout = window.setTimeout( function() {
		  self.sizeFootnote()
		  self.positionFootnote()
		}, 50)
	  },

	  toggle: function (el) {
		if (this.footnote.el){
		  this.close()
		} else {
		  this.open(el)
		}
	  },

	  open: function (el) {
		this.footnote.el = getParent(el, '.littlefoot-container')
		var popover = this.footnote.popover()

		this.footnote.el.classList.add('is-open')
		this.sizeFootnote()

		popover.classList.remove('is-hidden')

		this.positionFootnote()
		popover.classList.add('is-visible')
		window.addEventListener("resize", self.resize.bind(self))
	  },

	  close: function () {
		if (this.footnote.el) {
		  var popover = this.footnote.popover()
		  var footnote = this.footnote.el

		  popover.classList.remove('is-visible')
		  window.removeEventListener("resize", self.resize.bind(self))

		  this.footnote.el = null

		  setTimeout(function(){
			footnote.classList.remove('is-open')
			popover.classList.add('is-hidden')
		  }, 250)
		}
	  },

	  footnote: {
		el: null,

		popover: function() {
		  if (this.el) {
			return this.el.querySelector('.littlefoot-popover')
		  }
		},

		panel: function() {
		  if (this.el) {
			return this.el.querySelector('.littlefoot-footnote')
		  }
		}
	  },

	  positionFootnote: function () {
		panel = this.footnote.panel()
		if (panel && panel.offsetWidth > 0) {
		  this.setOrientation()
		  this.setPosition()
		}
	  },

	  setOrientation: function () {
		var wrapper = this.footnote.el
		wrapper.classList.remove('open-up', 'open-down')
		wrapper.classList.add('open-down')
		var pos = this.footnote.panel().getBoundingClientRect()

		wrapper.classList.remove('open-up', 'open-down')


		if (pos.bottom > window.innerHeight) {
		  wrapper.classList.add('open-up')
		} else {
		  wrapper.classList.add('open-down')
		}
	  },

	  setPosition: function () {
		var container = this.footnote.el.parentElement
		var contentWidth = container.offsetWidth
		var panel = this.footnote.panel()
		var left = this.footnote.el.offsetLeft - container.offsetLeft
		var overlap = panel.offsetWidth + left

		panel.setAttribute('style', '')

		if (overlap > contentWidth) {
		  panel.setAttribute('style', 'left: -' + String(overlap - contentWidth) + 'px;')
		}
	  },

	  sizeFootnote: function() {
		var context = this.footnote.el.parentElement
		var el = document.createElement("div")
		//el.classList.add('littlefoot-container')
		el.insertAdjacentHTML('beforeend', '<div class="littlefoot-test-wrapper"><div class="littlefoot-test">'+ this.footnote.el.footnoteContent+'</div></div>')
		context.appendChild(el)
		var size = {
		  h: el.firstChild.offsetHeight + 5,
		  w: el.firstChild.offsetWidth + 5
		}
		context.removeChild(el)

		this.footnote.el.querySelector('.littlefoot-footnote-content').setAttribute('style', 'max-width:'+size.w+'px;')
	  },

	  template: {

		wrapper: function (el) {
		  return ' <div class="littlefoot-container open-down">'+this.button(el)+this.popover(el)+'</div>'
		},

		button: function (el) {
		  return '<button class="littlefoot-button" title="view footnote #'+el.textContent+'"> '+
		  		el.textContent
			+' </button>'
		},

		popover: function (el) {
		  return '<aside class="littlefoot-popover is-hidden">'
			  +'<div class="littlefoot-footnote">'
				+'<div class="littlefoot-footnote-wrapper">'
				  +'<div class="littlefoot-footnote-content">'
					+this.footnoteContent(el)
				  +'</div>'
				+'</div>'
			  +'</div><div class="littlefoot-popover-triangle"></div>'
			+'</aside>'
		},

		footnoteContent: function(anchor) {

		  // Find the footnote from the id in the anchor's href
		  var id = anchor.getAttribute('href').replace(':', "\\:")
		  var footnote = document.querySelector(id)

		  // Remove the "return to content" link
		  var link = footnote.querySelector('a[href^=\\#fnref]')
		  if (link) link.remove()
		  var containerWidth = footnote.offsetParent.parentElement.offsetWidth
		  return footnote.innerHTML
		}
	  }
	}

	var getParent = function(start, classname) {
	  var func;
	  var element = start;

	  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
		if (typeof document.body[fn] == 'function') {
		  func = fn;
		  return true;
		}
		return false;
	  });

	  while (element !== null) {
		if (element !== null && element[func](classname)) {
		  return element;
		}
		element = element.parentElement;
	  }
	}

	LittleFoot.initialize()
	window.LittleFoot = LittleFoot
  })()