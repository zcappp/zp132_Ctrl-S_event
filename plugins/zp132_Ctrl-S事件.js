function save(e) {
    if (e.keyCode === 83 && e.ctrlKey && e.keyCode !== 17) {
        e.preventDefault()
        const ref = window.zp132
        ref.exc(ref.props.exp || "$el.previousElementSibling.click()", { ...ref.ctx, $el: ref.container, $event: e })
    }
}

function init(ref) {
    window.zp132 = ref
    document.addEventListener("keydown", save)
}

function destroy(ref) {
    document.removeEventListener("keydown", save)
}

$plugin({
    id: "zp132",
    props: [{
        prop: "exp",
        type: "exp",
        label: "事件表达式"
    }],
    init,
    destroy
})