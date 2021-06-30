var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
var data = []
request.onload  = () =>{
 data = JSON.parse(request.response);
  for(var i=1;i<=10;i++){
      var button = document.createElement('input');
      button.setAttribute('class','button');
      button.setAttribute('id',i);
      button.setAttribute('type', 'button');
      button.setAttribute('value', i);
      button.setAttribute('onClick','display(id)');
      button.style.background.color="aqua";
      document.body.append(button);
    }
      var prev = document.createElement('input');
      prev.setAttribute('class','button');
      prev.setAttribute('id','prev');
      prev.setAttribute('type', 'button');
      prev.setAttribute('value', 'prev');
      prev.setAttribute('onClick','previous()');
      document.body.append(prev);

      var next = document.createElement('input');
      next.setAttribute('class','button');
      next.setAttribute('id','next');
      next.setAttribute('type', 'button');
      next.setAttribute('value', 'next');
      next.setAttribute('onClick','next()');
      document.body.append(next);
  }
var table = document.createElement('table');
var thead=document.createElement('thead');
thead.setAttribute('class','thead');
var tr=document.createElement('tr');
var th1=document.createElement('th');
th1.innerHTML="ID";
var th2=document.createElement('th');
th2.innerHTML="NAME";
var th3=document.createElement('th');
th3.innerHTML="EMAIL";
tr.append(th1,th2,th3);
thead.append(tr);

var getid = 1;
  function display(id){
      var id  = parseInt(id);
      getid = id;
      table.innerHTML="";
      for(var i=((id-1)*10);i<id*10;i++){
        var tr = document.createElement('tr');
        var td1  = document.createElement('td');
        var td2  = document.createElement('td');
        var td3  = document.createElement('td');
        td1.innerText = data[i].id;
        td2.innerText = data[i].name;
        td3.innerText = data[i].email;

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        table.append(tr,thead);
        table.setAttribute("border", "2");
        table.style.textAlign = "center";
      }
      document.body.append(table)
  }

  function previous(){
  if(getid>1){
    getid --;
      display(getid);
    }
  }

    function next(){
  if(getid<10){
    getid ++;
      display(getid);
    }
  }

request.send();