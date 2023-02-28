$(document).ready(function () {

    let btn = $("button");  //buttonu gotururuk

    let users = [];   //bosh array teyin edirik

    if (localStorage.getItem("users") != null) {               //local storagede user varsa gelen userleri onun uzerine yazdir. yeni sifirlayib tezden yazdirma.
        users = JSON.parse(localStorage.getItem("users"))        //yeni bow arrayi assigin ele storagedeki userler;
    }

    $("button").click(function () {                                    //buttona click edende

        $("ul").empty();                                        //ul nin  ichini boshaltdiriq ki , yeni userler elave edende kohneleride tekrar yazdirmasin

        let input1 = $("input").eq(0);                           // inputlardan 1cisini gotururuk
        let input2 = $("input").eq(1);                              //inputlardan ikincisini gotururuk

        users.push({                                                // bosh arrayimiza yeni elave olunan userin datalarini push edirik
            id: uuidv4(),
            name: input1.val(),
            surname: input2.val(),
        })

        localStorage.setItem("users", JSON.stringify(users));            //elimizde olan datalari local storageye elave edorik. yeni set edirik.


        for (const user of users) {    //userlerin ichinden useri gotur

            $("ul").append(`<li class="list-group-item " data-id=${user.id}>${user.name + " " + user.surname}</li`) // ul nin ichine li leri elave edirik. linin ichinde de user name ve surname.
            //burada li-ye data id teyin edirik.hansiki userin id sine beraber edirik.
            input1.val("");                                 //inputlarin valuesini sifrla
            input2.val("");
        }


    })

    for (const user of users) {
        $("ul").append(`<li class="list-group-item" data-id=${user.id} >${user.name + " " + user.surname}</li`)
        //buttona click etmeden de ekranda localda olanda datalari gostermek uchun. fora salib ul ye append edirik. yeni ekrani refresh edende datalar ekrandan silinmesin deye
    }



    function uuidv4() {                                                       //dinamik functional idler yaratmaq uchun hazir functiondur
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }



    function deleteLi(id) {
        let existUser = users.filter(m => m.id != id);
        users = existUser                     //local storagedeki userin id-si ddelet elediyimiz datanin adisine beraber olmayanlari yeni user list kimi beraberlewdir
        localStorage.setItem("users", JSON.stringify(users));           //yeni userler 10dursa 1ni gotur 9 deneni beraberlerwdir hemin ad altinda ve locala yeniden set et.
    }


    $(document).on("click", "li", function () {                                //li-nin clickinde userlerden click etdiyimiz useri gotur id-si beraberdirse li-nin data-id sine delete et
        for (const user of users) {
            if (user.id == $(this).attr("data-id")) {
                deleteLi(user.id);
                $(this).remove();                                            //
            }
        }

    })





})