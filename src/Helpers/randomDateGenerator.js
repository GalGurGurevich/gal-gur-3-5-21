export default function randomDate() {
    const startDate = new Date(2021,3,5).getTime();
    const endDate =  new Date(2030,0,1).getTime();
    const spaces = (endDate - startDate);
    let timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp).toLocaleDateString();
}
