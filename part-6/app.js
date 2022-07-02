// JAVASCRIPT OBJECT
const js = {
    name: "Mohammed",
    age: 27,
    extraInfo: {
        phoneNumber: [063453453, 054325234],
    },
};

// JSON

const json = JSON.stringify(js);
console.log(json);

function execute(cb) {
    cb();
}

const callback = (cb) => {
    cb();
};

execute(
    callback(function() {
        console.log("hi");
    })
);

// call back hell