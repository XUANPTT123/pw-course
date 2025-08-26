let departurePlanet = "Trái đất";
let mission = "Khám phá Vũ trụ K17";
const crew = ['Xuân', 'Hạ', 'Thu', 'Đông'];

function launchShip(crew) {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`)
} 
launchShip(crew);

function calculateDistance(speed, time) {
    console.log(`Khoảng cách: ${speed * time}`);
}
calculateDistance(1000,24);


function convertTimeToHex(time) {
    const hex = time.toString(16).toUpperCase(); 
    console.log(`Thời gian sau chuyển đổi: ${hex}`);
}
convertTimeToHex(120);


function decryptCode(code) {
    const tach = code.split(",");
    const convert = tach.map (a => {

        if (a === a.toUpperCase() && a !== a.toLowerCase()) {
            return a.toUpperCase();
        }
        return a.toLowerCase()
    })
    let b = ''
    convert.map(c => b+=c)
    console.log(b)
}
decryptCode('K17 Challenge');

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();