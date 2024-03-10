<template>
    <section>
        <h2 class="guide_tit">Btn</h2>
        <div class="guide_wrap">
            <h3 class="guide_sub_tit"><span>Component Composition</span></h3>
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