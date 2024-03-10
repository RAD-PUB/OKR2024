<template>
    <section>
        <h2 class="guide_tit">Pagination</h2>
        <ul class="pagination">
            <li v-for="(el, idx) in pagination" :key="idx">
                <a href="#">{{ el.page }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Pagination',
    data: () => ({
        pagination: [
            {
                page: 1
            },
            {
                page: 2
            },
            {
                page: 3
            },
            {
                page: 4
            },
            {
                page: 5
            },
            {
                page: 6
            },
        ]
    })
}
</script>