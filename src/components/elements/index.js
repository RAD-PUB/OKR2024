import uppperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // 전역 컴포넌트 폴더
    './',

    // 하위 폴더 포함 여부
    false,

    // 기본 컴포넌트 찾는 정규 표현식
    /\w+\.(vue)$/
)

const Comp = {
    install(Vue) {
        requireComponent.keys().forEach(fileName => {
            // 컴포넌트 설정 가져오기
            const componentConfig = requireComponent(fileName)

            // 컴포넌트의 파스칼표기법 이름 가져오기
            const componentName = uppperFirst(
                camelCase(
                    // 폴더 위치와 무관하게 이름 추출
                    fileName
                        .split('/')
                        .pop()
                        .replace(/\.\w+$/, '')
                )
            )

            // 컴포넌트를 전역적으로 등록
            Vue.component(
                componentName,
                // `export default`를 이용한 컴포넌트는 `.default`로 컴포넌트
                // 옵션을 추출하고 그렇지 않은 컴포넌트는 모듈의 루트를 호출
                componentConfig.default || componentConfig
            )
        })
    }
}

export default Comp;