<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '@/stores/counter'
import { useSystemStore } from '@/stores/system'
import * as apiHome from '@/api/home.js'

const { locale } = useI18n()
const useSystem = useSystemStore()
// 防止结构后丢失响应性
const { count, addCount } = toRefs(useCounterStore())
const showPopover = ref(false)

// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '中文', lang: 'zh_Hans' },
    { text: 'English', lang: 'en' },
]

const onSelect = (action: any) => {
    changeLang(action.lang)
}

const changeLang = (lang: string) => {
    locale.value = lang
    useSystem.changeLang(lang)
}
const init = async () => {
    await apiHome.getLayout()
}
onMounted(() => {
    init()
})
</script>

<template>
    <div class="page p-[20px]">
        <div class="h-[40px] w-full">
            {{ $t('hello') }}
        </div>
        <div class="h-[40px] w-full">
            {{ $t('welcome', { x: 'Q仔' }) }}
        </div>
        <div class="mt-[20px] flex items-center">
            <span class="w-[200px] flex">{{ count }}</span>
            <van-button type="primary" @click="addCount()">Add</van-button>
        </div>
        <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
            <template #reference>
                <van-button type="primary">{{ $t('change') }}</van-button>
            </template>
        </van-popover>
    </div>
</template>
