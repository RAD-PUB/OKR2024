<template>
    <section>
        <h2 class="guide_tit">Pagination</h2>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Usage</span></h3>
            <Pagination
                :current="pagingCurrent"
                :total="15"
                :max="5"
                @paging-click="pagingClick"
            />
            <highlightjs
                language="vue"
                code='<Pagination
    :current="pagingCurrent"
    :total="15"
    :max="5"
    @paging-click="pagingClick"
/>'/>
            <highlightjs
                language="js"
                code="export default {
    data: () => ({
        pagingCurrent: 1,
    }),
    methods: {
        pagingClick(i) {
            this.pagingCurrent = (i + 1)
        }
    }
}"/>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Props</span></h3>
            <table class="props_tbl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>current</b></td>
                        <td>Number</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>시작 페이지를 지정합니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>total</b></td>
                        <td>Number</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>전체 페이지 수를 지정합니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>max</b></td>
                        <td>Number</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>표시되는 페이지 수를 지정합니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>disabled</b></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>구성요소를 클릭하는 기능을 제거합니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>firstIcon</b></td>
                        <td>String</td>
                        <td>fa-solid fa-angles-left</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>첫 번째 버튼에 사용할 아이콘입니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>prevIcon</b></td>
                        <td>String</td>
                        <td>fa-solid fa-angle-left</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>이전 버튼에 사용할 아이콘입니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>nextIcon</b></td>
                        <td>String</td>
                        <td>fa-solid fa-angle-right</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>다음 버튼에 사용할 아이콘입니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>lastIcon</b></td>
                        <td>String</td>
                        <td>fa-solid fa-angles-right</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>마지막 버튼에 사용할 아이콘입니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>showFirstLastPage</b></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>첫 페이지와 마지막 페이지로 이동하는 버튼을 표시합니다.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>totalVisible</b></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>총 페이지 수와 페이지 버튼 사이에 ... 를 표시합니다.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Events</span></h3>
            <table class="props_tbl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>paging-click</b></td>
                        <td>[number]</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>페이지 버튼을 클릭하면 발생합니다.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Disabled</span></h3>
            <Pagination
                :current="pagingCurrent"
                :total="15"
                :max="5"
                disabled
                @paging-click="pagingClick"
            />
            <highlightjs
                language="vue"
                code='<Pagination
    :current="pagingCurrent"
    :total="15"
    :max="5"
    disabled
    @paging-click="pagingClick"
/>'/>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Total visible</span></h3>
            <Pagination
                :current="pagingCurrent"
                :total="15"
                :max="5"
                totalVisible
                @paging-click="pagingClick"
            />
            <highlightjs
                language="vue"
                code='<Pagination
    :current="pagingCurrent"
    :total="15"
    :max="5"
    totalVisible
    @paging-click="pagingClick"
/>'/>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Show First Last Page</span></h3>
            <Pagination
                :current="pagingCurrent"
                :total="15"
                :max="5"
                showFirstLastPage
                @paging-click="pagingClick"
            />
            <highlightjs
                language="vue"
                code='<Pagination
    :current="pagingCurrent"
    :total="15"
    :max="5"
    showFirstLastPage
    @paging-click="pagingClick"
/>'/>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Icons</span></h3>
            <Pagination
                :current="pagingCurrent"
                :total="15"
                :max="5"
                firstIcon="fa-solid fa-circle-arrow-left"
                prevIcon="fa-solid fa-circle-chevron-left"
                nextIcon="fa-solid fa-circle-chevron-right"
                lastIcon="fa-solid fa-circle-arrow-right"
                showFirstLastPage
                @paging-click="pagingClick"
            />
            <highlightjs
                language="vue"
                code='<Pagination
    :current="pagingCurrent"
    :total="15"
    :max="5"
    firstIcon="fa-solid fa-circle-arrow-left"
    prevIcon="fa-solid fa-circle-chevron-left"
    nextIcon="fa-solid fa-circle-chevron-right"
    lastIcon="fa-solid fa-circle-arrow-right"
    showFirstLastPage
    @paging-click="pagingClick"
/>'/>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PaginationPage',
    data: () => ({
        pagingCurrent: 1,
    }),
    methods: {
        pagingClick(i) {
            this.pagingCurrent = (i + 1)
        }
    }
}
</script>