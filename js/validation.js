let nameNode,emailNode,messageNode,subjectNode;
let errorNode1,errorNode2,errorNode3,errorNode4;
$(function(){
     nameNode=$("#name");
     emailNode=$("#email");
     subjectNode=$("#subject");
     messageNode=$("#message");
     errorNode1=$("#errornode1");
     errorNode2=$("#errornode2");
     errorNode3=$("#errornode3");
     errorNode4=$("#errornode4");
    //  let array=[errorNode1,errorNode2,errorNode3,errorNode4];
    //   for(let node of array){
    //  // node.css('color',"red");
    //   node.css({color:"red"});
    // }
    nameNode.blur(()=>validate1());
    emailNode.blur(()=>validate2());
    subjectNode.blur(()=>validate3());
    messageNode.blur(()=>validate4());
    $("contact_form").submit(()=>validateForm());
   });


function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    return (v1 && v2 && v3 && v4 ); 
}

function validate1(){
    let name=nameNode.val();
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.html("");
    if(name===''){
        errorNode1.html("<h3>name is required</h3>");
        nameNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(name)==false){
        errorNode1.html("<h3> name must have only letters</h3>");
        nameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        nameNode.css({border:"2px solid green"});
        return true;
    }
}



function validate2(){
    let email=emailNode.val();
    errorNode2.html("");
    if(email===''){
        errorNode2.html("<h3>Email is required</h3>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode2.html("<h3>Please enter valid email</h3>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else{
        emailNode.css({border:"2px solid green"});
        return true;
    }
}
function validate3(){
    let subject=subjectNode.val();
    errorNode3.html("");
    if(subject===''){
        errorNode3.html("<h3>subject is required</h3>");
        subjectNode.css({border:"2px solid red"});
        return false;
    }
    else if(subject.length<10){
        errorNode3.html("<h3>subject must be 10 characters long</h3>");
        subjectNode.css({border:"2px solid red"});
        return false;
    }
    else{
        subjectNode.css({border:"2px solid green"});
        return true;
    }
}
function validate4(){
    let message=messageNode.val();
    errorNode4.html("");
    if(message===''){
        errorNode4.html("<h3>message is required</h3>");
        messageNode.css({border:"2px solid pink"});
        return false;
    }
    else if(message.length<20){
        errorNode3.html("<h3>message must be 20 characters long</h3>");
        messageNode.css({border:"2px solid pink"});
        return false;
    }
    else{
        messageNode.css({border:"2px solid green"});
        return true;
    }
}