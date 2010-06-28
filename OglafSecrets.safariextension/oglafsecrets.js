function createNode(title, content) {
	var node = document.createElement('div');
	var b = document.createElement('b');
	b.appendChild(document.createTextNode(title + ':'));
	node.appendChild(b);
	node.appendChild(document.createTextNode(' ' + content));
	return node;
}

const bundleid = "com_tildesoft_safari_oglafsecrets";
var strip = document.getElementById('strip');
var content = document.getElementsByClassName('content')[0];
var contentHeight = content.offsetHeight;
if (strip && content) {
	strip.addEventListener("click", function(event) {
		var node = document.getElementById(bundleid);
		if (node) {
			content.removeChild(node);
			content.style.height = '';
		} else {
			node = document.createElement("div");
			node.id = bundleid;
			node.style['font-weight'] = 'normal';
			node.style['float'] = 'left';
			node.style['padding-top'] = '12px';
			node.style['padding-left'] = '16px';
			var headerImg = document.getElementById('tt').getElementsByTagName('img')[0];
			if (headerImg) {
				var header = headerImg.getAttribute('title');
				if (header) node.appendChild(createNode('header', header));
			}
			var title = strip.getAttribute('title');
			if (title) node.appendChild(createNode('title', title));
			var alt = strip.getAttribute('alt');
			if (alt) node.appendChild(createNode('alt', alt));
			content.appendChild(node);
			content.style.height = contentHeight + node.offsetHeight + 'px';
		}
	}, false);
}
