<template>
    <div>
        <h3 class="guide_sub_tit">체크 박스</h3>
        <div class="inp_wrap">
            <div class="chk" v-for="(el, idx) in chk" :key="idx">
                <input type="checkbox" :id=el.id>
                <label :for=el.for>{{ el.label }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckBox',
    data: () => ({
        chk: [
            {
                id: "chk01-1",
                for: "chk01-1",
                label: "체크박스 1"
            },
            {
                id: "chk01-2",
                for: "chk01-2",
                label: "체크박스 2"
            },
            {
                id: "chk01-3",
                for: "chk01-3",
                label: "체크박스 3"
            },
            {
                id: "chk01-3",
                for: "chk01-3",
                label: "체크박스 3"
            },
        ]
    })
}
</script>