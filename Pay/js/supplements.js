API_URL = 'http://78.46.244.156/api/'
API_URL1 = 'http://78.46.244.156/search/query?q='



document.getElementById('current_supplement_submit').onclick = function(){
    let elem = document.getElementById("current_supplement").value
    
    let request = new XMLHttpRequest()
    request.open("GET", API_URL1 + elem, false);
    request.send();
    let data = JSON.parse(request.responseText)
    
    showDetails(data[0])
    }


function showDetails(supplement) {
    let request = new XMLHttpRequest()
    request.open("GET", API_URL + "classes/" + supplement['class_id'], false);
    request.send();
    let data = JSON.parse(request.responseText)
    console.log(data)
    let class_name = data['name']
    request = new XMLHttpRequest()
    request.open("GET", API_URL + "purposes/" + supplement['purpose_id'], false);
    request.send();
    data = JSON.parse(request.responseText)
    console.log(data)
    let purpose_name = data['name']
    request = new XMLHttpRequest()
    request.open("GET", API_URL + "supplements/" + supplement['id'] + "/side-effects", false);
    request.send();
    data = JSON.parse(request.responseText)
    console.log(data)
    let side_effects = []
    for (let i = 0; i< data.length; i++) {
        side_effects.push(data[i]['name'])
    }
    document.getElementById('section2_inner_body_results_h').innerText = ('About football player: ')
    document.getElementById('supplement-0').innerText = ("Number: ")
    document.getElementById('supplement-class').innerText = (class_name)
    document.getElementById('supplement-1').innerText = ("School: ")
    document.getElementById('supplement-purpose').innerText = (purpose_name)
    document.getElementById('supplement-2').innerText = ("Age: ")
    document.getElementById('supplement-side-effects').innerText = (side_effects.join(', '))
}
