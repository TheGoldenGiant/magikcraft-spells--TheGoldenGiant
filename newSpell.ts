const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem(10);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}

