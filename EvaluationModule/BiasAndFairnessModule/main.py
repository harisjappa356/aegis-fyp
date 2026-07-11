import sys
from pathlib import Path

# Add the src directory to Python path
current_dir = Path(__file__).parent
src_dir = current_dir / "src"
sys.path.insert(0, str(src_dir))

from src.core.config import ConfigManager
from src.inference.inference_pipeline import InferencePipeline
from src.eval_engine.postprocessing import PostProcessor
from src.eval_engine.evaluation.evaluator import FairnessEvaluator


if __name__ == "__main__":
    config_manager = ConfigManager()
    inference_pipeline = InferencePipeline(config_manager)
    inference_pipeline.run()

    from run_full_evaluation import _normalize_predictions_to_tokens
    _normalize_predictions_to_tokens(config_manager.config)

    post_processor = PostProcessor(config_manager)
    post_processor.run()

    evaluator = FairnessEvaluator(config_manager)
    eval_result = evaluator.run()

    print("\n📋 Audit Metrics Summary (CLI Output):")
    print("=" * 50)
    for m_name, m_data in eval_result.metrics.items():
        overall = m_data.get("overall")
        summary = m_data.get("summary")
        val = overall if overall is not None else summary
        
        by_attr = m_data.get("by_attribute", {})
        if by_attr:
            for attr, attr_data in by_attr.items():
                if attr_data is not None:
                    diff = attr_data.get("difference")
                    ovr = attr_data.get("overall")
                    val_attr = diff if diff is not None else ovr
                    print(f"✔️ {m_name} ({attr}): {val_attr}")
        elif val is not None:
            print(f"✔️ {m_name}: {val}")
        else:
            print(f"✔️ {m_name}: {m_data}")