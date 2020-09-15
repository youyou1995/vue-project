<template>
    <Modal
        :value="value"
        :title="title"
        :width="width"
        :closable="closable"
        :mask-closable="maskClosable"
        transfer
        :footer-hide="footerHide"
        @on-cancel="cancel"
        @on-visible-change="visbileChange"
        class="modal-frame"
        class-name="modal-frame-box"
        :class="[className]"
    >
        <template #header>
            <slot name="header"></slot>
        </template>
        <div class="content" v-loading="loading">
            <slot></slot>
        </div>
        <template #footer>
            <div v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
            <div v-else>
                <Button class="default-long" :disabled="disabledCancel" v-if="isCancel" @click="cancel">{{cancelText}}</Button>
                <Button class="primary-long" :disabled="disabledOk" v-if="isOk" @click="ok">{{okText}}</Button>
            </div>
        </template>
    </Modal>
</template>

<script>
// 弹窗
export default {
    name: 'ModalFrame',
    props: {
        value: {
            type: Boolean,
            required: true,
            default: false
        },
        title: {
            type: String
        },
        width: {
            type: [Number, String],
            default: 700
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        okText: {
            type: String,
            default: '确定'
        },
        // 是否显示关闭按钮
        closable: {
            type: Boolean,
            default: true
        },
        className: {
            type: String
        },
        // 是否点击遮罩关闭
        maskClosable: {
            type: Boolean,
            default: false
        },
        // 是否隐藏底部
        footerHide: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        isCancel: {
            type: Boolean,
            default: true
        },
        isOk: {
            type: Boolean,
            default: true
        },
        disabledCancel: {
            type: Boolean,
            default: false
        },
        disabledOk: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        cancel() {
            this.$emit('on-cancel')
        },
        ok() {
            this.$emit('on-ok')
        },
        visbileChange(e){
            this.$emit('on-visible', e)
        }
    }
}
</script>

<style scoped lang="scss">
.modal-frame {
    /deep/ .modal-frame-box {
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal {
            top: 0;
            .ivu-modal-header {
                border-color: $border-color;
            }
            .ivu-modal-content {
                .ivu-modal-header-inner {
                    @include font-16-22-bold;
                }
                .ivu-modal-body {
                    padding: 0;
                    > .content {
                        /*min-height: 326px;*/
                        max-height: calc(100vh - 110px - 160px);
                        overflow-y: auto;
                        position: relative;
                        // 弹窗中表单下间距20px，label右间距0
                        /deep/ .ivu-form {
                            .ivu-form-item {
                                margin-bottom: 20px;
                                .ivu-form-item-label {
                                    padding-right: 0;
                                }
                            }
                        }
                        // 弹窗中表格表头高度和列表不同
                        /deep/ .ivu-table {
                            .ivu-table-header {
                                .ivu-table-cell {
                                    padding: 16px 15px;
                                }
                            }
                        }
                    }
                }
                .ivu-modal-footer {
                    text-align: center;
                    border-color: $border-color;
                     button + button {
                        margin-left: 20px;
                    }
                    .ivu-button {
                        padding: 6px 36px;
                    }
                }
            }
        }
    }
}
@media only (max-width: 1550px) {
    .modal-frame {
        /deep/ .modal-frame-box {
            .ivu-modal {
                .ivu-modal-content {
                    .ivu-modal-body {
                        > .content {
                            max-height: calc(100vh - 110px - 80px);
                        }
                    }
                }
            }
        }
    }
}
</style>
