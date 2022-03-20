fetch('', {
    method: 'POST',
    headers: {},
    body: JSON.stringify(''),
}).then((res) => {
    if (res.status === 200) return res.json();

    throw new Error();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

const func = async () => {
    try { 
        const res = await fetch('');
        if (res.status !== 200) throw new Error();

        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

func().then((data) => {
    
})
const data = await func();

