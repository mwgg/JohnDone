var mwggJohnDoneApp = {
    init: function() {
        mwggJohnDoneApp.button = document.getElementById("button-generate");
        mwggJohnDoneApp.result = document.getElementById("input-username");
        mwggJohnDoneApp.hide = document.getElementById("link-clear");
        
        mwggJohnDoneApp.button.addEventListener('click', mwggJohnDoneApp.generate, false);

        mwggJohnDoneApp.hide.addEventListener('click', function(e) {
            mwggJohnDoneApp.result.value = "";
        }, false);

    },
    generate: function() {
        var words = [];

        // pick 1 or 2 adjectives and a noun
        words.push( mwggJohnDoneApp.adjectives[Math.floor(Math.random()*mwggJohnDoneApp.adjectives.length)] );
        if ( Math.floor(Math.random()*2) ) words.push( mwggJohnDoneApp.adjectives[Math.floor(Math.random()*mwggJohnDoneApp.adjectives.length)] );
        words.push( mwggJohnDoneApp.nouns[Math.floor(Math.random()*mwggJohnDoneApp.nouns.length)] );

        // capitalize first letter of each picked word if a flipped coin said so
        if ( Math.floor(Math.random()*2) ) for (var i in words) words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

        // flip a coin to decide whether to concat the words using "_"
        if ( Math.floor(Math.random()*2) ) var username = words.join("_");
        else var username = words.join("");

        mwggJohnDoneApp.result.value = username;
        mwggJohnDoneApp.result.focus();
        mwggJohnDoneApp.result.select();
    },
    nouns: [
        "time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "family", "student", "group", "country", "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business", "issue", "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city", "community", "name", "president", "team", "minute", "idea", "kid", "body", "information", "back", "parent", "face", "others", "level", "office", "door", "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education"
    ],
    adjectives: [
        "other", "new", "good", "high", "old", "great", "big", "American", "small", "large", "national", "young", "different", "black", "long", "little", "important", "political", "bad", "white", "real", "best", "right", "social", "only", "public", "sure", "low", "early", "able", "human", "local", "late", "hard", "major", "better", "economic", "strong", "possible", "whole", "free", "military", "true", "federal", "international", "full", "special", "easy", "clear", "recent", "certain", "personal", "open", "red", "difficult", "available", "likely", "short", "single", "medical", "current", "wrong", "private", "past", "foreign", "fine", "common", "poor", "natural", "significant", "similar", "hot", "dead", "central", "happy", "serious", "ready", "simple", "left", "physical", "general", "environmental", "financial", "blue", "democratic", "dark", "various", "entire", "close", "legal", "religious", "cold", "final", "main", "green", "nice", "huge", "popular", "traditional", "cultural"
    ]
};

mwggJohnDoneApp.init();