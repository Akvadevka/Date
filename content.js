const button = document.getElementById("btn_click");
button.addEventListener("click", async() => {
    let lolz;
    lolz = document.getElementById('numb_input');
    let date;

    switch (lolz.value) {
        case "1":
            date = "Прогулка в парке. Покататься на аттракционах"
            break
        case "2":
            date = "Сходим в антикафе?"
            break
        case "3":
            date = "Сегодня банный день. Собирайся!"
            break
        case "4":
            date = "Посмотрим фильм. Чур не мелодрамму!"
            break
        case "5":
            date = "Покатаемся на велосипедах. Спрот это зызнь:)"
            break
        case "6":
            date = "Съездим на природу! Пикник, пляж, сад или природный комплекс"
            break
        case "7":
            date = "Посвятим время себе. Массочки, массажик и коктейли и вкусная пицца, которую мы приготовим сами"
            break
        case "8":
            date = "Сходим покататься на коньках. Если летом, то ролики)"
            break
        case "9":
            date = "В караоке, кальянную или клуб?"
            break
        case "10":
            date = "DancePartyOren - танцы openAir "
            break
        case "11":
            date = "Идем гулять и запускаем фонарик/шарики, загадываем желание"
            break
        case "12":
            date = "Прогулка в парке. И возьми с собой что-нибудь для уточек)"
            break
        case "13":
            date = "День СПА. Масскаж, сауна, бассейн, пляж, спа-салон - что-угодно"
            break
        case "14":
            date = "Отправиться в поход с палаткой, шашлыками и хорошим настроением!"
            break
        case "15":
            date = "Стрип-карты. Играем в игру, кто проигрывает - снимает любую вещь:)"
            break
        case "16":
            date = "Сходим на мастер-класс по рисованию?"
            break
        case "17":
            date = "Сходим на мастер-класс по глиняной лепке?"
            break
        case "18":
            date = "Сходим тир)"
            break
        case "22":
            date = "Учу тебя играть на гитаре. Или проводим музыкальный вечер, где ОБА поют под гитару"
            break
        case "19":
            date = "Свидание целого дня. Выберемся куда-нибудь: лунопарк, соль-илецк, фотосессия, башкирия"
            break
        case "20":
            date = "Сходим на мастем-класс или любое бесплатное мероприятие в городе"
            break
        case "21":
            date = "Покатаемся на картинге"
            break
        case "23":
            date = "Веревочный парк или любое другое экстримальное занятие"
            break
        case "24":
            date = "Батутный парк или полоса припятствий"
            break
        case "25":
            date = "Покатаемся на саппах или других водных атрибутах (например катамаран или квадроцикл)"
            break
        case "27":
            date = "Посетим комнату страха или смеха. Выбираешь ты!"
            break
        case "26":
            date = "Сыграем в интеллектуальные игры (например квиз-плиз и тп)"
            break
        case "28":
            date = "Сходим в планетарий"
            break
        case "29":
            date = "Покатаемся на машине ночью, прогуляемся. Не забудь взять пледик, мы будем лежать на траве и смотреть на звёздное небо. Можно взять с собой винишко"
            break
        case "30":
            date = "Поднимай свою жёпку, идём в спортзал или на открытые занятия по фитнесу, йоге"
            break
    }

        const dateElement = document.createElement('p');
        dateElement.style.color = '#000000';
        dateElement.style.marginTop = '15px';
        dateElement.innerText = "Свидание №" + lolz.value + ": " + date;
        const container = document.getElementById('form');
        container.appendChild(dateElement);


    }
)


