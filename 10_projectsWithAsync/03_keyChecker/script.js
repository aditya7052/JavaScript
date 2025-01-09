const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='color'>
    <table>
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    </tr>
    <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>Code</th>
    </tr>
    <tr>
    <th>${e.key === ' ' ? 'Space' : e.key}</th>
    <th>${e.keyCode}</th>
    <th>${e.code}</th>
    </tr>
    </table>
    </div>

    `
})