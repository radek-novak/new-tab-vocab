const PROP = 'PROP'
const getText = (callback) => chrome.storage.sync.get(PROP, callback)
const setText = (text, callback = () => {}) => chrome.storage.sync.set({PROP: text}, callback)

const formEl = document.getElementById('form')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const textarea = document.getElementById('text')
  setText(textarea.value)
})

window.onload = () => {
  setText(words)
  document.getElementById('text').value = words
}

var words = `sein | to be
haben | to have
werden | to become
können | can, to be able to
müssen | must, to have to
sagen | to say
machen | to do, make
geben | to give
kommen | to come
sollen | should, ought to
wollen | to want
gehen | to go
wissen | to know
sehen | to see
lassen | to let, allow, have done
stehen | to stand
finden | to find
bleiben | to stay, remain
liegen | to lie, be lying
heißen | to be called
denken | to think
nehmen | to take
tun | to do
dürfen | may, to be allowed
glauben | to believe
halten | to stop, hold
nennen | to name, to call (a name)
mögen | to like
zeigen | to show
führen | to lead
sprechen | to speak
bringen | to bring, take
leben | to live
fahren | to drive, ride, go
meinen | to think, have an opinion
fragen | to ask
kennen | to know
gelten | to be valid
stellen | to place, set
spielen | to play
arbeiten | to work
brauchen | to need
folgen | to follow
lernen | to learn
bestehen | to exist, insist, pass (an exam)
verstehen | to understand
setzen | to set, put, place
bekommen | to get, receive
beginnen | to begin
erzählen | to narrate, tell
versuchen | to try, attempt
schreiben | to write
laufen |, to run
erklären | to explain
entsprechen | to correspond
sitzen | to sit
ziehen | to pull, move
scheinen | to shine, seem, appear
fallen | to fall
gehören | to belong
entstehen | to originate, develop
erhalten | to receive
treffen | to meet
suchen | to search, look for
legen | to lay, put
vor·stellen | to introduce, imagine
handeln | to deal, trade
erreichen | to achieve, reach
tragen | to carry, wear
schaffen | to manage, create
lesen | to read
verlieren | to lose
dar·stellen | to depict, portray
erkennen | to recognize, admit
entwickeln | to develop
reden | to talk
aus·sehen | to appear, look (a certain way)
erscheinen | to appear
bilden | to form, educate
an·fangen | to begin
erwarten | to expect
wohnen | to live
betreffen | to affect, concern
warten | to wait
vergehen | to elapse; to decay
helfen | to help
gewinnen | to win
schließen | to close
fühlen | to feel
bieten | to offer
interessierento | interest
erinnern | to remember
ergeben | to result in
an·bieten | to offer
studieren | to study
verbinden | to connect, link
an·sehen | to look at, watch
fehlen | to lack, be missing, be absent
bedeuten | to mean
vergleichen | to compare`
