const PROP = 'PROP'
const getText = (callback) => chrome.storage.sync.get(PROP, callback)

window.onload = () => {
	getText((store) => {
		const lines = store[PROP].split('\n')

		const randomLine = lines[Math.floor(Math.random() * lines.length)]
		const [primary, secondary] = randomLine.split('|')

		document.getElementById('q').innerText = primary.trim()
		document.getElementById('explain').innerText = secondary.trim()
	})

	document.getElementById('go-to-options').addEventListener('click', () => {
	  if (chrome.runtime.openOptionsPage) {
	    // New way to open options pages, if supported (Chrome 42+).
	    chrome.runtime.openOptionsPage();
	  } else {
	    // Reasonable fallback.
	    window.open(chrome.runtime.getURL('options.html'));
	  }
	})
}
