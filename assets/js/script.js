// Dark Mode
if(localStorage.getItem('theme') == 'dark')
    setDarkMode()

function setDarkMode() {
    let Text = ''
    let isDark = document.body.classList.toggle('darkmode')

    if(isDark) {
        Text = 'AnggiMC'
        localStorage.setItem('theme', 'dark')
    } else {
        Text = 'AnggiMC'
        localStorage.removeItem('theme')
    }
    document.getElementById('darkBtn').innerHTML = Text
}    