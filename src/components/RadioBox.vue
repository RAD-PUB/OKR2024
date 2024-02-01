<template>
    <div>   
        <h3 class="guide_sub_tit">라디오 박스</h3>
        <div class="inp_wrap">
            <div class="rdo" v-for="(el, idx) in rdo" :key="idx">
                <input type="radio" :id=el.id :name=el.name>
                <label :for=el.for>{{ el.label }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RadioBox',
    data: () => ({
        rdo: [
            {
                id: "rdo01-1",
                for: "rdo01-1",
                label: "라디오박스 1",
                name: 'rdo'
            },
            {
                id: "rdo01-2",
                for: "rdo01-2",
                label: "라디오박스 2",
                name: 'rdo'
            },
            {
                id: "rdo01-3",
                for: "rdo01-3",
                label: "라디오박스 3",
                name: 'rdo'
            },
        ]
    })
}
</script>