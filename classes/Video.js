class Video {
    constructor(title, views, creator, thumbnail, date) {
        this.title = title;
        this.views = views;
        this.creator = creator;
        this.thumbnail = thumbnail;
        this.date = date;
    }

    getTitle() {
        return this.title;
    }

    getViews() {
        return this.views;
    }

    getCreator() {
        return this.creator;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    getDate() {
        return this.date;
    }
}

const video1 = new Video(
    "introduction to react",
    123141,
    "mentor",
    "https://i.ytimg.com/vi/pWnJY_Wkde4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDACvggHdnajGc2PD-Oa1dPu69Ulw",
    "12-13-2021"
);


console.log(video1)