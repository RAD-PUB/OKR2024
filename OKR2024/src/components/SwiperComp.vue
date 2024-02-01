<template>
    <section>
        <h2 class="guide_tit">Swiper</h2>
        <swiper
            :slides-per-view="3"
            :space-between="50"
            :loop=true
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>SLIDE1</swiper-slide>
            <swiper-slide>SLIDE2</swiper-slide>
            <swiper-slide>SLIDE3</swiper-slide>
            <swiper-slide>SLIDE4</swiper-slide>
            <swiper-slide>SLIDE5</swiper-slide>
        </swiper>
        <highlightjs 
            language="js"
            code="
                -vue-

                <swiper
                    :slides-per-view=`3`
                    :space-between=`50`
                    :loop=true
                    @swiper=`onSwiper`
                    @slideChange=`onSlideChange`
                >
                    <swiper-slide>SLIDE1</swiper-slide>
                    <swiper-slide>SLIDE2</swiper-slide>
                    <swiper-slide>SLIDE3</swiper-slide>
                    <swiper-slide>SLIDE4</swiper-slide>
                    <swiper-slide>SLIDE5</swiper-slide>
                </swiper> 
            "
            class="test"
        />

        <highlightjs 
            language="js"
            code="
                -script-
                
                <script>
                    import {Swiper, SwiperSlide} from 'swiper/vue';
                    import 'swiper/css';
                
                    export default {
                        components: {
                            Swiper,
                            SwiperSlide,
                        },
                        setUp() {
                            const onSwiper = (swiper) => {
                                console.log(swiper);
                            };

                            const onSlideChange = () => {
                                console.log('slide change');
                            };

                            return {
                                onSwiper,
                                onSlideChange
                            }
                        }
                    }
                </script>
            "
            class="test"
        />
    </section>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
    name: 'SwiperComp',
    components: {
        Swiper,
        SwiperSlide,
        highlightjs: hljsVuePlugin.component
    },
    setUp() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };

        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange
        }
    }
}
</script>