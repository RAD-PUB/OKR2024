<template>
    <section>
        <h2 class="guide_tit">Btn</h2>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Usage</span></h3>
            <Btn 
                btnName="primary"
                className="primary"
            />
            <highlightjs
                language="js"
                code="
                    <div class='btn_area'>
                        <!-- a tag -->
                        <template v-if='textLink'>
                            <a
                                :href='linkUrl'
                                :class='className'
                                @click='btnClick'
                            >
                                <template v-if='btnName'>
                                    {{ btnName }}
                                </template>
                                <template v-else>
                                    <slot />
                                </template>
                            </a>
                        </template>

                        <!-- button tag -->
                        <template v-else>
                            <button
                                :id='id !== '' ? id : userId'
                                :type='type'
                                :class='className'
                                :disabled='disabled'
                                @click='btnClick'
                            >
                                <template v-if='btnName'>
                                    {{ btnName }}
                                </template>
                                <template v-else>
                                    <slot />
                                </template>
                            </button>
                        </template>
                    </div>
                "
            />

            <highlightjs 
                language="js"
                code="
                    export default {
                        name: 'Btn',
                        props: {
                            id: {
                                type: String,
                                default: '',
                                required: false
                            },
                            type: {
                                type: String,
                                default: 'button',
                                required: false
                            },
                            className: {
                                type: String,
                                default: '',
                                required: false
                            },
                            btnName: {
                                type: String,
                                default: '',
                                required: false
                            },
                            disabled: {
                                type: Boolean,
                                default: false,
                                required: false
                            },
                            textLink: {
                                type: Boolean,
                                default: false,
                                required: false
                            },
                            linkUrl: {
                                type: String,
                                default: '',
                                required: false
                            }
                        },
                        data() {
                            return {
                                userId: ''
                            }
                        },
                        mounted() {
                            this.userId = `btn${this._uid}`
                        },
                        methods: {
                            btnClick(e) {
                                this.$emit('click', e)
                            }
                        }
                    }
                "
            />
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
                        <td><b>id</b></td>
                        <td>String</td>
                        <td>btn + _uid</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>버튼 id 값 지정</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>type</b></td>
                        <td>String</td>
                        <td>button</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>버튼 타입 지정</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>className</b></td>
                        <td>String</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>클래스 명 지정</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>btnName</b></td>
                        <td>String</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>버튼 명 지정</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>disabled</b></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>버튼 활성화 상태 지정</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>textLink</b></td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>버튼 태그 지정(button, a)</p>
                        </td>
                    </tr>
                    <tr>
                        <td><b>linkUrl</b></td>
                        <td>String</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>a태그 href 속성 값 지정</p>
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
                        <td><b>btnClick</b></td>
                        <td>[Boolean]</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>버튼 클릭 시 발생</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit">primary / medium <span>(button tag)</span></h3>
            <Btn 
                btnName="primary"
                className="primary"
            />
            <highlightjs 
                language="js"
                code="
                    <Btn
                        btnName=`primary`
                        className=`primary medium`
                    />
                "
            />
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>'btnName'값 없을 경우</span></h3>
            <Btn className="primary medium">
                primary
            </Btn>
            <highlightjs 
                language="js"
                code="
                    <Btn className=`primary medium`>
                        primary
                    </Btn>
                "
            />
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit">secondary / small <span>(button tag)</span></h3>
            <Btn 
                btnName="secondary"
                className="secondary small"
            />
            <highlightjs 
                language="js"
                code="
                    <Btn
                        btnName=`secondary`
                        className=`secondary small`
                    />
                "
            />
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit">primary / medium <span>(a tag)</span></h3>
            <Btn 
                btnName="a tag"
                className="primary medium"
                :textLink="true"
            />
            <highlightjs 
                language="js"
                code="
                    <Btn
                        btnName=`a tag`
                        className=`primary medium`
                        :textLink=`true`
                    />
                "
            />
        </div>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit">btn group</h3>
            <div class="btn_group">
                <Btn 
                    btnName="primary"
                    className="primary medium"
                />
                <Btn 
                    btnName="secondary"
                    className="secondary medium"
                />
            </div>
            <highlightjs 
                language="js"
                code="
                    <div class='btn-group'>
                        <Btn
                            btnName=`primary`
                            className=`primary medium`
                        />

                        <Btn
                            btnName=`secondary`
                            className=`secondary medium`
                        />
                    </div>
                "
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'BtnPage',
}
</script>

<style lang="scss" scoped>
@import '@styles/components/btn.scss'
</style>